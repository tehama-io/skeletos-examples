import * as React from "react";
import {AbstractRootRouteComponent} from "skeletos-react-web-router";
import {RootState} from "../states/RootState";
import {HomeRoute} from "../routes/HomeRoute";

require("./RootComponent.less");

export class RootComponent extends AbstractRootRouteComponent<RootState, HomeRoute> {

    render(): JSX.Element {
        return (
            <div className="RootComponent">
                Hello world!!
            </div>
        );
    }

}