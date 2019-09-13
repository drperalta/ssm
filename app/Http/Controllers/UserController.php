<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function user()
    {   
        $id =  auth()->user()->id;
        
        $user = User::whereId($id)->get(['fullname','username','email','id']);

        return response()->json($user[0], 200);
    }
}
