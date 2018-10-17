import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Price from 'components/Price';

const itemSize = '140px;'

const StyledItem = styled(Link)`
    color: #fff;
    display: flex;
    flex-direction: column;
    flex: 0 0 ${itemSize};
    width: ${itemSize};
    border: 1px solid #ccc;
    margin: 6px 4px;
    background-color: #fff;

    &:hover {
        box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    }
`;

const ImageWrapper = styled.div`
    flex: 0 0 ${itemSize};
    background-color: #eee;
    position: relative;
    background-image: url(/${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const MetaData = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
`;

const ItemName = styled.div`
    color: #666;
`;

const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
`;

export default class SmallItem extends Component {
    static defaultProps = {
        item: {
            id: 0,
            name: 'Unknown',
            image: '/paper.jpeg',
            price: 0,
        },
    };

    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {};
        this.state.item = this.props.item;
    }

    render() {
        const { id, name, image, price } = this.state.item;

        return (
            <StyledItem
                to={`/product/${id}`}>
                <ImageWrapper
                    image={image}
                />
                <MetaData>
                    <CenterContent>
                        <ItemName>{name}</ItemName>
                    </CenterContent>
                    <CenterContent>
                        <Price amount={price}/>
                    </CenterContent>
                </MetaData>
            </StyledItem>
        );
    }
}
