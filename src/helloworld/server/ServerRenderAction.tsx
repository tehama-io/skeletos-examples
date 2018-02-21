// tslint:disable-next-line
///<reference path="../../../typings/renderer.d.ts"/>

import * as React from "react";
import {AbstractHammerpackRenderAction} from "skeletos-react-express-hammerpack";
import {SkeletosCursor} from "skeletos";
import {RootState} from "../shared/states/RootState";
import {HomeRoute} from "../shared/routes/HomeRoute";
import {render} from "renderer";

export class ServerRenderAction extends AbstractHammerpackRenderAction<RootState, HomeRoute> {

    protected renderRootComponent(): JSX.Element {
        return render(this.readOnlyRootState);
    }

    protected createRootState(cursor: SkeletosCursor): RootState {
        return new RootState(cursor);
    }

    protected getRootRouteStateFromRootState(rootState: RootState): HomeRoute {
        return rootState.route;
    }

}

