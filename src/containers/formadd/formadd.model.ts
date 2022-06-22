import React from "react";

export type FormAddProps = {
    typeAdd: boolean;
    close?: (event: React.MouseEvent<HTMLImageElement>) => void;
};