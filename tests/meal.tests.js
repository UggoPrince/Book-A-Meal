import assert from 'assert';
import express from 'express';
import app from "../server.js";
import {getm, postm, putm, delm} from '../server/routes/meals';


describe('api/v1/', () => {

    describe( 'GET /meals', () =>
        {
            it('it should get all meal options', () =>
                {
                    getm.get('/', (req, res) =>
                        {
                            res.send("here i am ");
                        }
                    );
        
                }
            );
        }
    );

    describe( 'POST /meals', () =>
        {
            it('it should add a meal into the meal options', () =>
                {
                    postm.post('/', (req, res) =>
                        {
                            res.send("meal added");
                        }
                    );
        
                }
            );

        }
    );

    describe( 'PUT /meals/:mealId', () =>
        {
            it('it should update a meal option', () =>
                {
                    putm.put('/', (req, res) =>
                        {
                            res.send("meal added");
                        }
                    );
        
                }
            );

        }
    );

    describe( 'DELETE /meals/:mealId', () =>
        {
            it('it should delete a meal option', () =>
                {
                    delm.delete('/', (req, res) =>
                        {
                            res.send("meal deleted");
                        }
                    );
        
                }
            );

        }
    );
});