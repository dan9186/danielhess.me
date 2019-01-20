import React from 'react'
import styled from 'styled-components'

export class GCPIcon extends React.Component {
    render() {
        return (
            <Icon alt="GCP" viewBox="0 0 19 17" preserveAspectRatio="xMidYMid meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="8" r="2.433" transform="rotate(-89.504 9 8)"></circle>
                <path d="M17.84 7.403l-1.9-3.323h-3.67L14.526 8 9.92 16h2.98a1.2 1.2 0 0 0 1.04-.603l3.9-6.8a1.2 1.2 0 0 0 0-1.194z"></path>
                <path d="M10.756 12.8h-4.52L1.644 4.816.16 7.403a1.2 1.2 0 0 0 0 1.194l3.9 6.8A1.2 1.2 0 0 0 5.1 16h3.81l1.846-3.2z"></path>
                <path d="M13.94.603A1.2 1.2 0 0 0 12.9 0H5.1a1.2 1.2 0 0 0-1.04.603L2.142 3.94l1.835 3.18 2.26-3.92h9.192L13.94.603z"></path>
            </Icon>
        )
    }
}

const Icon = styled.svg`
	fill: #a1aab4;
	height: 18px;
	transform: translateY(4px);
	margin-left: 2px;
`
