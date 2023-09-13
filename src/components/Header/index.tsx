import { SearchBar } from './SearchBar';
import Menu from './Menu';
import SvgAsset from '@/assets/IconSvg';
import { assetList } from '@/assets';

const Header = () => {
	return (
		<header className="flex flex-col items-center">
			<section className="sm:ml-4 sm:py-2 flex w-10/12 justify-between flex-col sm:flex-row relative">
				<h1 className="text-4xl flex items-center" title="coineko">
					coinek
					<SvgAsset
						options={{
							alt: 'coineko',
							width: '30',
							height: '30',
							src: `${assetList['cat']}`,
							className: 'inline self-center w-5 sm:w-10'
						}}
					/>
				</h1>
				<p className="absolute text-xs bottom-0">
					All cryptocurrency data provided by{' '}
					<strong>
						<a
							href="http://coingecko.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Coingecko
						</a>
					</strong>
				</p>
				<SearchBar />
			</section>
			<Menu />
		</header>
	);
};

export default Header;
