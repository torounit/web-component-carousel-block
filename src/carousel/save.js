import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

function Save( { setAttributes, attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<macro-carousel pagination="true">
				<InnerBlocks.Content />
			</macro-carousel>
		</div>
	);
}

export default Save;
