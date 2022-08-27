export default {
	name: "productType",
	title: "ProductType",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		},
		{
			name: "parts",
			title: "Parts",
			type: "array",
			of: [
				{
					type: "document",
					fields: [
						{
							name: "partImage",
							title: "PartImage",
							type: "array",
							of: [{ type: "image" }],
							options: {
								hotspot: true,
							},
						},
						{
							name: "partName",
							title: "PartName",
							type: "string",
						},
						{
							name: "partSlug",
							title: "PartSlug",
							type: "slug",
							options: {
								source: "name",
								maxLength: 90,
							},
						},
						{
							name: "partPrice",
							title: "PartPrice",
							type: "number",
						},
						{
							name: "partDetails",
							title: "PartDetails",
							type: "string",
						},
						{
							name: "partURL",
							title: "PartURL",
							type: "url",
						},
					],
				},
			],
		},
	],
};
