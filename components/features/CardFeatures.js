import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { FeatureWrapper, ButtonModel } from './styles';
import ButtonList from './buttonList';
import AddedCart from './AddedCart';
import Spining from '../Spining';
import { cartContext } from '../context';
import ButtonsModel from './buttosModel';

const CardFeatures = ({ laptop, load }) => {
	const { Open, addCart, setOpen, setNavcart } = useContext(cartContext);
	const [wishList, setwishList] = useState(false);
	const [compare, setCompare] = useState(false);
	cartContext;
	const [spining, setSpining] = useState(false);
	const router = useRouter();
	const goDetail = () => {
		if (load) {
			setSpining(true);
			setTimeout(() => {
				setSpining(false);
			}, 1000);
		}
		router.push(`/detailPage/${laptop.slug}`);
	};
	return (
		<>
			<Spining spining={spining} />
			<div className='feature-cards'>
				<ButtonList
					setOpen={setOpen}
					id={laptop.id}
					addCart={addCart}
					setNavcart={setNavcart}
					goDetail={goDetail}
					setwishList={setwishList}
					setCompare={setCompare}
				/>
				<div className='card-content' onClick={goDetail}>
					<div className='feature-top'>
						<img
							src={`/img/${laptop.img}.png`}
							alt='laptop'
							className='image-active'
						/>
						<img
							src={`/img/${laptop.imgHover}.png`}
							alt='laptop'
							className='image-hover'
						/>
					</div>
					<div className='footer'>
						<div className='stars'>
							<MdStar className='star-checked' />
							<MdStar className='star-checked' />
							<MdStar className='star-checked' />
							<MdStarHalf className='star-checked' />
							<MdStar className='star' />
						</div>
						<div className='footer-title'>{laptop.title}</div>
						<div className='price'>{laptop.price}</div>
					</div>
				</div>
			</div>
			<FeatureWrapper>
				<div className={Open ? 'model-cart open' : 'model-cart'}>
					<AddedCart setOpen={setOpen} laptop={laptop} />
				</div>
				<div className={wishList ? 'model-cart button-model' : 'model-cart'}>
					<ButtonsModel
						setOPenmodels={setwishList}
						text='You must be logged in to manage your wishlist'
					/>
				</div>
				<div className={compare ? 'model-cart button-model' : 'model-cart'}>
					<ButtonsModel
						setOPenmodels={setCompare}
						text='The product has been added to list compare.'
					/>
				</div>
			</FeatureWrapper>
		</>
	);
};

export default CardFeatures;
