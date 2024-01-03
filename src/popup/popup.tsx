import { ReactNode,useState } from "react"
import { SendMessage } from "../types/Message";

export const Popup = ():ReactNode => {
	const [receivedMsg,setreceivedMsg] = useState<string[]>(['本じゃ']);

	// popupからメッセージを送る
	const handleClick = async () => {
		const res = await chrome.runtime.sendMessage<SendMessage>({ action: 'getItems' });
		setreceivedMsg(res)
	};

	return(
		<>
			<h1 onClick={handleClick}>popupです！</h1>
			{receivedMsg}

		</>
	)

}