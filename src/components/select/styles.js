import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const BoxSelect = styled.div `
    margin-bottom: ${props => props.mgBottom && props.mgBottom}px;
    position: relative;

    .selected {
        border-bottom: 1px solid;
        cursor: pointer;
        display: flex;
        font-size: 17px;
        justify-content: space-between;
        line-height: 22px;
        padding: 5px 0;
        position: relative;

        .placeholder {
            color: ${Colors.silver};
        }

        .item-selected {
            align-items: center;
            display: flex;
            max-width: 100%;
            overflow: hidden;
            padding-right: 8px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .arrow {
            position: relative;
            top: 6px;
            transition: .15s ease-in-out;
        }

        &.open {
            .arrow {
                transform: rotate(180deg);
                top: 1px;
            }
        }
    }

    .list-select {
        background-color: ${Colors.white};
        box-shadow: 0 4px 12px -4px rgba(0, 0, 0, .25);
        max-height: 0;
        overflow-y: auto;
        position: absolute;
        top: 34px;
        width: 100%;
        z-index: 100;

        &::-webkit-scrollbar-track {
            background-color: ${Colors.alabaster};
        }

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${Colors.mercury};
            border-radius: 4px;
        }

        .item {
            align-items: center;
            border-bottom: 1px solid lighten(map-get($colors, "grey-light"), 24.6%);
            cursor: pointer;
            display: flex;
            padding: 10px 8px;

            .flag {
                margin-right: 12px;
                width: 18px;
            }

            &:last-of-type {
                border-bottom-width: 0;
            }

            &:hover {
                background-color: lighten(map-get($colors, "grey-light"), 24.6%);
            }

            &.check {
                background-color: map-get($colors, 'primary');
                color: map-get($colors, 'white');
            }
        }

        &.open {
            border-width: 1px;
            max-height: 160px;
        }
    }

    .error {
        color: ${Colors.danger};
        font-size: 13px;
        line-height: 22px;
    }
`
