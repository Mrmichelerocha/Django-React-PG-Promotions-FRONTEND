import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Estamos aguardando os dados ou Não há dados ainda!...
			</p>
		);
	};
}
export default PostLoading;
