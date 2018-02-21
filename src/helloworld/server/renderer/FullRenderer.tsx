import * as React from "react";
import {RootState} from "../../shared/states/RootState";
import {RootComponent} from "../../shared/components/RootComponent";

export function render(root: RootState): JSX.Element {
    return (
        <RootComponent skeletosState={root} route={root.route} />
    );
}