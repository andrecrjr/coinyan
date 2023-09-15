import React from 'react';

export default function DescriptionTable({
	description
}: {
	description: string;
}) {
	return (
		<section className="flex items-center mt-8 w-10/12 mb-2 md:mb-5 md:mt-10">
			<span>{/* <Cat className="w-[35px] h-[35px]" /> */}</span>
			<h3 className="text-xs text-left items-start md:text-base">
				{description}
			</h3>
		</section>
	);
}