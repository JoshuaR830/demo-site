'use client';
import NavigationBar from "@/components/NavigationBar";
import { Box, Card, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function Page() {

    const [clientId, setClientId] = React.useState('1NTPXMFCBL_II92I-AT0WNFYD0VVPMB-DKGA6PU5QLS');
    const [partnerId, setPartnerId] = React.useState('b5704f40-077b-46c2-8b53-6115b15356cb');
    const [desktopImage, setDesktopImage] = React.useState('https://th.bing.com/th/id/OIG.H5F2.yIDc33nfdXJQARH?pid=ImgGn');
    const [mobileImage, setMobileImage] = React.useState('https://th.bing.com/th/id/OIG.DtVDLXUi6CrDLEWSej5T?pid=ImgGn');
    const [desktopAltText, setDesktopAltText] = React.useState('');
    const [mobileAltText, setMobileAltText] = React.useState('');
    const [locale, setLocale] = React.useState('en-GB');
    const [redirectUri, setRedirectUri] = React.useState('');

    function onClientIdChange(event: React.ChangeEvent<HTMLInputElement>) {
        setClientId(event.currentTarget.value);
    }

    function onPartnerIdChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPartnerId(event.currentTarget.value);
    }

    function onDesktopImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDesktopImage(event.currentTarget.value);
    }

    function onMobileImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMobileImage(event.currentTarget.value);
    }

    function onDesktopAltChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDesktopAltText(event.currentTarget.value);
    }

    function onMobileAltChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMobileAltText(event.currentTarget.value);
    }

    function onLocaleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setLocale(event.currentTarget.value);
    }

    function onRedirectUriChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRedirectUri(event.currentTarget.value);
    }

    return (
        <>
            <NavigationBar></NavigationBar>
            <Box sx={{ m: 2 }}>
                <Script src='https://dg6c6rzvlbae3.cloudfront.net/unidays-partner-component.min.js'></Script>
                <web-app clientID={clientId} redirectUri={redirectUri} locale={locale} partnerId={partnerId}></web-app>
                <Card sx={{ mt: 2, mx: 'auto', maxWidth: 1200 }}>
                    <TextField sx={{ m: 2 }} variant="outlined" label="Client Id" onChange={onClientIdChange} value={clientId}></TextField>
                    <TextField sx={{ m: 2 }} variant="outlined" label="Partner Id" onChange={onPartnerIdChange} value={partnerId}></TextField>
                    <TextField sx={{ m: 2 }} variant="outlined" label="Locale" onChange={onLocaleChange} value={locale}></TextField>
                    <TextField sx={{ m: 2 }} variant="outlined" label="Redirect URI" onChange={onRedirectUriChange} value={redirectUri}></TextField>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <Box sx={{ display: 'flex' }}>
                                <TextField sx={{ m: 2 }} variant="outlined" label="Mobile Image" onChange={onMobileImageChange} value={mobileImage}></TextField>
                                <TextField sx={{ m: 2 }} variant="outlined" label="Mobile alt text" onChange={onMobileAltChange} value={mobileAltText}></TextField>
                            </Box>
                            {mobileImage.length > 0 && <Box component={'img'} width={300} height={200} src={mobileImage} alt={mobileAltText}></Box>}
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex' }}>
                                <TextField sx={{ m: 2 }} variant="outlined" label="Desktop Image" onChange={onDesktopImageChange} value={desktopImage}></TextField>
                                <TextField sx={{ m: 2 }} variant="outlined" label="Desktop alt text" onChange={onDesktopAltChange} value={desktopAltText}></TextField>
                            </Box>
                            {desktopImage.length > 0 && <Image width={300} height={300} src={desktopImage} alt={desktopAltText}></Image>}
                        </Box>
                    </Box>
                </Card>
            </Box>
        </>
    )
}