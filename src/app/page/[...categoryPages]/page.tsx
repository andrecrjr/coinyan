// import { Metadata } from 'next';

import { fetchAndFilterDataByTag, fetchService } from '@/services/ApiService';
import { Table } from '@/components/shared/Layout';
import { Metadata } from 'next';

type Props = {
	params: { categoryPages: string[] };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const metadata = await fetchService.getFetchPriceApi<{
		category_id: string;
		name: string;
		description: string;
	}>(`tags/${params.categoryPages[0]}`, {}, 1000 * 100000);
	const paginationTitle = ` - Page ${params.categoryPages[1]}`;
	return {
		title: metadata?.name + paginationTitle,
		description: metadata?.description
	};
}

export default async function TablePages({ params }: Props) {
	const [categoryId, id] = params.categoryPages;

	const { paginatedData, categoryData } = await fetchAndFilterDataByTag(
		categoryId,
		id
	);

	return (
		<Table
			data={paginatedData || []}
			tableDescription={`${categoryData.description}`}
		/>
	);
}
