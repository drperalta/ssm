<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function user()
    {
        return response()->json(['user' => auth()->user()->first(['fullname','username','email'])], 200);
    }
}
