import React from "react";

export type FormAddProps = {
    typeAdd: boolean;
    close?: (event: React.MouseEvent<HTMLImageElement>) => void;
    close4add?: (arg:boolean) => void;
};