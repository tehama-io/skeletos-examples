import express = require("express");
import {
    AbstractHammerpackRenderAction,
    AbstractInitializeHammerpackWebServiceAction
} from "skeletos-react-express-hammerpack";
import {ServerRenderAction} from "./ServerRenderAction";


export class InitializeServerAction extends AbstractInitializeHammerpackWebServiceAction {

    protected createPageRenderAction(
        request: express.Request, response: express.Response, next: express.NextFunction): AbstractHammerpackRenderAction<any, any> {
        return new ServerRenderAction(request, response, next, this.hammerpackUtil);
    }

}