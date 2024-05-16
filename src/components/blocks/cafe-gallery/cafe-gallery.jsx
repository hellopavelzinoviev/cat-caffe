import { StyledSection, StyledTitle } from './styles';
import { TitleSize } from '../../ui/title/title';
import Gallery from '../../ui/gallery/gallery';

function CafeGallery({ gallery }) {
    return (
        <StyledSection>
            <StyledTitle level={2} size={TitleSize.BIG}>Галерея нашего кафе</StyledTitle>
            <Gallery slides={gallery} />
        </StyledSection>
    )
}

export default CafeGallery;