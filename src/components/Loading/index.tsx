import ReactLoading from "react-loading";
import { LoadingBox } from "./style";

const Loading = () => (
        <LoadingBox className="box_loading">
            <ReactLoading type="spinningBubbles"/>
        </LoadingBox>
)

export default Loading;