
import {InitializeClientAction} from "./InitializeClientAction";

let action = new InitializeClientAction();

action.execute();


// this is standard hot module reload stuff...unfortunately it needs to exist in this file and cannot be an import.

const HOT_MODULE_REF: string = "hot";
declare const module: any;

if (module && module[HOT_MODULE_REF]) {
    module[HOT_MODULE_REF].accept(
        () => {
            action = new InitializeClientAction();
            action.execute();
        }
    );

    module[HOT_MODULE_REF].dispose(
        () => {
            action.onBeforeHotModuleReload();
        }
    );
}