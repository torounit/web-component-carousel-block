import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';

function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps,{
		renderAppender: false,
	});

	const { children, ...props } = innerBlocksProps;

	return (
		<div {...props}>
			<macro-carousel pagination>
				{children}
			</macro-carousel>
		</div>
	);
}

export default Edit;
