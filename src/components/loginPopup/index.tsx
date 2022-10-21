import React from 'react';
import {CloseButton, CloseIcon, Popup, PopupContent} from './styles';

export type LoginPopupProps = {
	toggle: () => void;
}

export const LoginPopup = (props: LoginPopupProps) => {
	return (
		<Popup>
			<PopupContent>
				<CloseButton onClick={props.toggle}><CloseIcon/></CloseButton>
				<p>This is a popup</p>
			</PopupContent>
		</Popup>
	);
};