<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{   
    use SoftDeletes;

    protected $fillable = [
        'post', 
        'user_id',
    ];

    protected $hidden = [
        'deleted_at',
    ];
}
