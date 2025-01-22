import { useEffect, useRef } from "react";

interface UploadWidgetResult {
    event: string;
    info: {
        secure_url?: string;
        public_id?: string;
        resource_type?: string;
    };
}

interface UploadWidgetError {
    message: string;
    statusCode: number;
}

interface CloudinaryWidget {
    open: () => void;
    close: () => void;
    destroy: () => void;
}

interface UploadWidgetOptions {
    cloudName: string;
    uploadPreset: string;
    folder?: string;
    sources?: string[];
    multiple?: boolean;
    maxFiles?: number;
    cropping?: boolean;
}

interface CloudinaryInstance {
    createUploadWidget: (
        options: UploadWidgetOptions,
        callback: (error: UploadWidgetError | null, result: UploadWidgetResult | null) => void
    ) => CloudinaryWidget;
}

declare global {
    interface Window {
        cloudinary: CloudinaryInstance;
    }
}

function UploadWidget() {
    const cloudinaryRef = useRef<CloudinaryInstance | null>(null);
    const widgetRef = useRef<CloudinaryWidget | null>(null);

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        if (cloudinaryRef.current) {
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName: 'dtlj6wzki',
                    uploadPreset: 'gggggug',
                },
                (error, result) => {
                    if (error) {
                        console.error('Upload error:', error.message);
                        return;
                    }
                    if (result?.event === 'success') {
                        console.log('Upload URL:', result.info.secure_url);
                    }
                }
            );
        }
    }, []);

    return (
        <button
            onClick={() => widgetRef.current?.open()}
        >
            Upload Images
        </button>
    );
}

export default UploadWidget;