import { ToggleSwitch } from 'flowbite-react'
import React, { useState } from 'react'

export default function StatusSwitch(props) {
    const { checked = false, handleCheck } = props;
    return (
        <>
            <ToggleSwitch
                checked={checked}
                label="Toggle me"
                onChange={handleCheck}
            />
        </>
    )
}
