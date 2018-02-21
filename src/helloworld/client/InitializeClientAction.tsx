import * as React from "react";
import {RootState} from "../shared/states/RootState";
import {HomeRoute} from "../shared/routes/HomeRoute";
import {SkeletosCursor} from "skeletos";
import {RootComponent} from "../shared/components/RootComponent";
import {AbstractInitializeReactBrowserAction} from "skeletos-react-web-router";

export class InitializeClientAction extends AbstractInitializeReactBrowserAction<RootState, HomeRoute> {
    protected renderReactPage(rootState: RootState, rootRouteState: HomeRoute): JSX.Element {
        return <RootComponent skeletosState={rootState} route={rootRouteState} />;
    }

    protected createRootState(rootCursor: SkeletosCursor): RootState {
        return new RootState(rootCursor);
    }

    protected getRootRouteState(rootState: RootState): HomeRoute {
        return rootState.route;
    }


}