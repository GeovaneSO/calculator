import Lottie from "react-lottie"
import { ContainerSection } from "./style"
import loadingAnimated from "../../assets/react_lottie_error/90767-internal-server-error.json"
import { Context } from "../../contexts";

const Error = () => {
	const { isPaused, isStopped } = Context();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimated,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		}
	};
      
    return (
        <ContainerSection>
			<div className="img">
				<Lottie
					options={defaultOptions}
					isStopped={isStopped}
					isPaused={isPaused}
				/>
			</div>
        </ContainerSection>
    );
};

export { Error };