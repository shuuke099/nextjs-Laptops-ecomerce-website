import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/navbar';
import Features from '../../../components/features';
import Footer from '../../../components/footer';
import NewsLetter from '../../../components/NewsLetter.js/index.js';
import GlobalStyle, { Container } from '../../globalStyles';
import DetailBaner from '../../../DetailComponents/DetailBaner';
import ProductDetail from '../../../DetailComponents/productDetail';
import Spining from '../../../components/Spining';
import Banner from '../../../components/Banner';
import Hero from '../../../components/Banner/Hero';
import BannerSlider from '../../../components/Banner/bannerSlider';
import Brands from '../../../components/Banner/Brands';
import { brands } from '../../../utilits';
import CartProvider from '../../../components/context';
import PagesContent from '../../../deliveryComponent/PagesContent';

const LegalPage = () => {
	const [spining, setSpining] = useState(true);
	useEffect(() => {
		setSpining(true);
		setTimeout(() => {
			setSpining(false);
		}, 2000);
	}, []);

	return (
		<>
			<CartProvider>
				<GlobalStyle />
				<Spining spining={spining} />
				<Navbar />
				<Hero hero='legalbanner'>
					<BannerSlider
						title='legal active page'
						subtitle='This Online store was created using Nextjs'
					/>
				</Hero>
				<Container>
					<PagesContent
						title='Legal Notice'
						subtitle='Legal
Credits'
					/>
				</Container>
				<NewsLetter />
				<Footer />
			</CartProvider>
		</>
	);
};

export default LegalPage;
