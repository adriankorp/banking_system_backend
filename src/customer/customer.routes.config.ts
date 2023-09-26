import express from 'express';
import debug from 'debug';
import { body } from 'express-validator';
import { CommonRoutesConfig } from '../common/common.routes.config';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';

const log: debug.IDebugger = debug('app:customers-routes');


export class CustomersRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, 'CustomersRoutes');
	}

    configureRoutes(){
        return this.app
    }

}





