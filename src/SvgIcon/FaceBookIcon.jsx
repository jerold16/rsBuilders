import React from 'react'

const FaceBookIcon = ({ size }) => {
    return (
        <svg width={size ? size : "16"} height={size ? size + 7 : "16"} viewBox="0 0 11 19" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.84586 18.7826V10.2156H9.72029L10.1515 6.8759H6.84586V4.74399C6.84586 3.77737 7.11318 3.11863 8.50088 3.11863L10.2679 3.1179V0.130755C9.96231 0.0910443 8.91336 0 7.6925 0C5.14314 0 3.3978 1.55611 3.3978 4.41323V6.8759H0.514648V10.2156H3.3978V18.7826H6.84586Z" />
        </svg>
    )
}

export default FaceBookIcon