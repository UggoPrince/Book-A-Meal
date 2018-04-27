import assert from 'assert';
import express from 'express';
import app from "../app.js";
import meals from '../server/routes/meals';
/*import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should();*/

describe('api/v1/', function(){

    describe( 'GET /meals', function()
        {
            it('it should get all meal options', function()
                {
                    meals.get('/', function(req, res)
                        {
                            res.send("here i am ");
                        }
                    );
        
                }
            );
        }
    );

    describe( 'POST /meals', function()
        {
            it('it should add a meal into the meal options', function()
                {
                    meals.post('/', function(req, res)
                        {
                            res.send("meal added");
                        }
                    );
        
                }
            );

        }
    );

    describe( 'PUT /meals/mealId', function()
        {
            it('it should update a meal option', function()
                {
                    meals.put('/', function(req, res)
                        {
                            res.send("meal added");
                        }
                    );
        
                }
            );

        }
    );

    describe( 'DELETE /meals/mealId', function()
        {
            it('it should delete a meal option', function()
                {
                    meals.delete('/', function(req, res)
                        {
                            res.send("meal deleted");
                        }
                    );
        
                }
            );

        }
    );
});