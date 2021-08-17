interface CmsImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	width?: number;
}

const CmsImage: React.FC<CmsImageProps> = ({ src, alt, width, ...rest }) => {
	return (
		<picture>
			{/* Bilde i webp-format */}
			<source
				srcSet={`${src}?fm=webp${width ? `&w=${width}` : ""}`}
				type="image/webp"
			/>
			{/* Faller tilbake på jpeg-format */}
			<source
				srcSet={`${src}?fm=jpg&fl=progressive${
					width ? `&w=${width}` : ""
				}`}
				type="image/jpeg"
			/>
			<img src={src} alt={alt} {...rest} />
		</picture>
	);
};

export default CmsImage;
