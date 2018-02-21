import {AbstractSkeletosState, State} from "skeletos";
import {HomeRoute} from "../routes/HomeRoute";

export class RootState extends AbstractSkeletosState {

    @State(() => HomeRoute)
    route: HomeRoute;
}