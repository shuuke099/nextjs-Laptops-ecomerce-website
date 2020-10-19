import React from 'react';
import styled from 'styled-components';
import { Container } from '../../src/globalStyles';
import { brands } from '../../utilits';
import { colors } from '../../utilits/styles';
import Brands from './Brands';

const BannerSlider = ({ title, subtitle }) => {
	return (
		<>
			<Container>
				<div className='bannerwraper'>
					<div className='brandwrap'>
						<Brands brands={brands} className='brands' />
					</div>
					<div className='bannerSlide-contnt'>
						<p>{title}</p>
						<h1 className='banner-title'>{subtitle}</h1>
						<button className='banner-button'>explore more</button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default BannerSlider;
