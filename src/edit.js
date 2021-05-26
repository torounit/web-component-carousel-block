import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps();

	return (
		<>
			<div { ...blockProps }>
				hello
			</div>
		</>
	);
}

export default Edit;
