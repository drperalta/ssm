<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

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

        return $request->all();

    }
}
