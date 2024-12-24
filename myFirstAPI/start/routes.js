'use strict'

const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { password: ['password1', 'password2', 'password3'] }
})

Route.group(()=>{

  Route.post('/controller', 'UserController.store');
  Route.post('/controller1', 'UserController.store');
  Route.post('/controller2', 'UserController.store');
  Route.post('/controller3', 'UserController.store');
  
}).prefix('api/v1');