import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';

import edit from './edit';
import save from './save';

const { name } = metadata;

registerBlockType( name, {
	...metadata,
	edit,
	save
} );
