import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Rada Sea Ventures.</title>
				<meta name='description' content='Rada sea ventures' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Saira:wght@100;300&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<main className="container-fluid min-w-screen h-screen bg-[url('/bg-mobile.jpg')] md:bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat relative">
				<div className='flex flex-col justify-center  items-center h-full'>
					<div className='hidden md:block'>
						<Image
							src='/logo.png'
							alt='rada sea ventures logo'
							width={391.37}
							height={159.53}
							layout='fixed'
						/>
					</div>
					<div className='md:hidden'>
						<Image
							src='/logo.png'
							alt='rada sea ventures logo'
							width={293.24}
							height={119.53}
							layout='fixed'
						/>
					</div>
					<div className='absolute bottom-20 md:bottom-10 w-full text-center text-white'>
						<div className='flex flex-row flex-wrap justify-center'>
							<div className='w-full md:w-auto'>
								<a
									href='https://www.instagram.com/radaseaventures/'
									target='_blank'
									rel='noreferrer'
									className='text-xl'
								>
									<img src='/ig.svg' className='inline mr-2' />
									/radaseaventures
								</a>
							</div>
							<span className='hidden md:block mx-5 in md:text-3xl'>|</span>
							<a
								href='mailto:booking@radaseaventures.com'
								target='_blank'
								rel='noreferrer'
								className='text-xl w-full md:w-auto mt-4 md:mt-0'
							>
								booking@radaseaventures.com
							</a>
							<span className='hidden md:block mx-5 md:text-3xl'>|</span>
							<a
								href='tel:+393288299077'
								target='_blank'
								rel='noreferrer'
								className='text-xl w-full md:w-auto mt-4 md:mt-0'
							>
								+ 39 328 829 90 77
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

const TechnologyCard = ({
	name,
	description,
	documentation,
}: TechnologyCardProps) => {
	return (
		<section className='flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
			<h2 className='text-lg text-gray-700'>{name}</h2>
			<p className='text-sm text-gray-600'>{description}</p>
			<a
				className='mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2'
				href={documentation}
				target='_blank'
				rel='noreferrer'
			>
				Documentation
			</a>
		</section>
	);
};

export default Home;
