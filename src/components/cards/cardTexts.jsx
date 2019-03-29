import React from 'react'

import ResetUL from '../common/resetUL'
import ResetLI from '../common/resetLI'

const CardTexts = ({texts}) => {
    return (
        <ResetUL>
        {texts.map(text => 
            <ResetLI>
                {text}
            </ResetLI>
        )}
        </ResetUL>
    )
}

export default CardTexts