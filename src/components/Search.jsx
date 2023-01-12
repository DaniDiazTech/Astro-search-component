import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
	keys: ['title', 'description', 'headings'],
	includeMatches: true,
	minMatchCharLength: 2,
	threshold: 0.5,
};

// SearchList: all posts once it's passed to the astro template
export default function Search({ posts }) {

}
