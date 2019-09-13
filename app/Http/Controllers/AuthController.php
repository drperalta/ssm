<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\User;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request){
        
        $this->validate($request, [
            'fullname' => 'required|max:255',
            'email' => 'required|email|unique:users|max:255',
            'username' => 'required|unique:users|max:255|',
            'password' => 'required|min:6|max:255|same:confirmPassword',
            'confirmPassword' => 'sometimes|max:255',
        ]);
        
        User::create([
            'fullname' => $request->fullname,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'Successfully created User!'
        ], 201);
    }

    public function login(Request $request){

        $this->validate($request, [
            'username' => 'required|max:255',
            'password' => 'required|max:255'
        ]);

        $credentials = [
            'username' => $request->username,
            'password' => $request->password
        ];

        if (auth()->attempt($credentials)) {

            $user = $request->user();

            $tokenResult = $user->createToken('Personal Access Token');

            $token = $tokenResult->token;
            $token->expires_at = Carbon::now()->addWeek()->setTimezone('GMT+8');
            $token->save();

            return response()->json([
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ], 200);    

        } else {
            return response()->json(['error' => 'Invalid username or password'], 401);
        }
    }

    public function logout(Request $request)
    {   
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
