import { useState } from 'react';
export const useSwiper = () => {
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);
	const minSwipeDistance = 50;

	const onTouchStart = e => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientY);
	};

	const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientY);

	const onTouchEnd = (next, previous, e) => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;
		if (isLeftSwipe) {
			next(e);
		}
		if (isRightSwipe) {
			previous(e);
		}
	};
	return {
		onTouchStart,
		onTouchMove,
		onTouchEnd
	};
};
