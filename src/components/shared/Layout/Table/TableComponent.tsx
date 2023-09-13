import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Table = ({ children }: Props) => {
	return (
		<section
			className="overflow-x-scroll 
				 sm:overflow-x-auto sm:w-10/12 mb-10"
		>
			<table className="bg-[#DEDEDE]  rounded-md table-auto w-full">
				{children}
			</table>
		</section>
	);
};
