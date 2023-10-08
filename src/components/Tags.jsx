import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { StateProvider } from './context/StateContext';

const Tags = () => {
	const { activeTag, setActiveTag } = useContext(StateProvider);

	const handleTagClick = (index) => {
		setActiveTag(index);
	};

	return (
		<TagsContainer>
			{['Work', 'Short Break', 'Long Break'].map((tag, i) => (
				<Tag
					onClick={() => handleTagClick(i)}
					activeTag={activeTag === i}
					key={i}
				>
					{tag}
				</Tag>
			))}
		</TagsContainer>
	);
};

export default Tags;

const TagsContainer = styled.div`
	background: ${(props) => props.theme.colors.primary};
	height: 4rem;
	width: 35rem;
	margin: 0 auto;
	border-radius: 6rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	cursor: pointer;
`;

const Tag = styled.button`
	all: unset;
	text-align: center;
	height: 4rem;
	border-radius: 6rem;
	flex: 1;
	font-size: 1.5rem;

	${({ activeTag }) =>
		activeTag &&
		css`
			background: ${(props) => props.theme.colors.secondary};
		`}
`;
