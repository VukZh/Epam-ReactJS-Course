import React from "react";

export type OptionsSelectProps = {
    checked: boolean;
    title: string;
    checkHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};