import {
	useBlockProps,
} from '@wordpress/block-editor';

function Save( { setAttributes, attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			hello
		</div>
	);
}

export default Save;
