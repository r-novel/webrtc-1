(function() {var implementors = {};
implementors["dtls"] = [{"text":"impl RefUnwindSafe for Alert","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ApplicationData","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChangeCipherSpec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CipherSuiteID","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CipherSuiteHash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CipherSuiteTLSEcdheEcdsaWithAes128GcmSha256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CipherSuiteTLSEcdheEcdsaWithAes256CbcSha","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientCertificateType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CompressionMethods","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CompressionMethodId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for INVALID_KEYING_LABELS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ContentType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Content","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Certificate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CryptoPrivateKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CryptoCbc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CryptoGcm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for EllipticCurveType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NamedCurveKeypair","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NamedCurve","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CONN_CLOSED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_DEADLINE_EXCEEDED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BUFFER_TOO_SMALL","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CONTEXT_UNSUPPORTED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_DTLSPACKET_INVALID_LENGTH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_HANDSHAKE_IN_PROGRESS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_CONTENT_TYPE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_MAC","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_PACKET_LENGTH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_RESERVED_EXPORT_KEYING_MATERIAL","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CERTIFICATE_VERIFY_NO_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CIPHER_SUITE_NO_INTERSECTION","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CIPHER_SUITE_UNSET","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CLIENT_CERTIFICATE_NOT_VERIFIED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CLIENT_CERTIFICATE_REQUIRED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CLIENT_NO_MATCHING_SRTP_PROFILE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_CLIENT_REQUIRED_BUT_NO_SERVER_EMS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_COMPRESSION_METHOD_UNSET","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_COOKIE_MISMATCH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_COOKIE_TOO_LONG","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_IDENTITY_NO_PSK","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_CIPHER_SPEC","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_CIPHER_SUITE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_CLIENT_KEY_EXCHANGE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_COMPRESSION_METHOD","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_ECDSASIGNATURE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_ELLIPTIC_CURVE_TYPE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_EXTENSION_TYPE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_HASH_ALGORITHM","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_NAMED_CURVE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_PRIVATE_KEY","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_SNI_FORMAT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_SIGNATURE_ALGORITHM","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_KEY_SIGNATURE_MISMATCH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NIL_NEXT_CONN","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NO_AVAILABLE_CIPHER_SUITES","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NO_AVAILABLE_SIGNATURE_SCHEMES","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NO_CERTIFICATES","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NO_CONFIG_PROVIDED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NO_SUPPORTED_ELLIPTIC_CURVES","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_UNSUPPORTED_PROTOCOL_VERSION","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_PSK_AND_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_PSK_AND_IDENTITY_MUST_BE_SET_FOR_CLIENT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_REQUESTED_BUT_NO_SRTP_EXTENSION","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SERVER_MUST_HAVE_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SERVER_NO_MATCHING_SRTP_PROFILE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SERVER_REQUIRED_BUT_NO_CLIENT_EMS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_VERIFY_DATA_MISMATCH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_HANDSHAKE_MESSAGE_UNSET","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_FLIGHT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_KEY_SIGNATURE_GENERATE_UNIMPLEMENTED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_KEY_SIGNATURE_VERIFY_UNIMPLEMENTED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_LENGTH_MISMATCH","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NOT_ENOUGH_ROOM_FOR_NONCE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_NOT_IMPLEMENTED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SEQUENCE_NUMBER_OVERFLOW","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_UNABLE_TO_MARSHAL_FRAGMENTED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_FSM_TRANSITION","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionValue","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Extension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionServerName","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionSupportedEllipticCurves","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionSupportedPointFormats","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionSupportedSignatureAlgorithms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionUseExtendedMasterSecret","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtensionUseSRTP","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SRTPProtectionProfile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Handshake","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageCertificate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageCertificateRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageCertificateVerify","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageClientHello","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageClientKeyExchange","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageFinished","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageHelloVerifyRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageServerHello","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageServerHelloDone","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeMessageServerKeyExchange","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HandshakeRandom","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RecordLayer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RecordLayerHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SignatureHashAlgorithm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HashAlgorithm","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SignatureAlgorithm","synthetic":true,"types":[]}];
implementors["rtcp"] = [{"text":"impl RefUnwindSafe for CompoundPacket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_TOTAL_LOST","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_INVALID_HEADER","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_EMPTY_COMPOUND","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BAD_FIRST_PACKET","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_MISSING_CNAME","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_PACKET_BEFORE_CNAME","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_TOO_MANY_REPORTS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_TOO_MANY_CHUNKS","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_TOO_MANY_SOURCES","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_PACKET_TOO_SHORT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_WRONG_TYPE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SDESTEXT_TOO_LONG","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_SDESMISSING_TYPE","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_REASON_TOO_LONG","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BAD_VERSION","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_FAILED_TO_FILL_WHOLE_BUFFER","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BAD_UNIQUE_IDENTIFIER","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BAD_MEDIA_SSRC","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_DELTA_EXCEED_LIMIT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FIREntry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FullIntraRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Goodbye","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PacketType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Packet","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PictureLossIndication","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RapidResynchronizationRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RawPacket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReceiverEstimatedMaximumBitrate","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReceiverReport","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReceptionReport","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SenderReport","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SLIEntry","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SliceLossIndication","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SourceDescriptionChunk","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SourceDescriptionItem","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SourceDescription","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SDESType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransportLayerCC","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NackPair","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransportLayerNack","synthetic":true,"types":[]}];
implementors["rtp"] = [{"text":"impl RefUnwindSafe for G711Payloader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for G722Payloader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for H264Payloader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for H264Packet","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OpusPayloader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for OpusPacket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for VP8Payloader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AbsSendTimeExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AudioLevelExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TransportCCExtension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Extension","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Packet","synthetic":true,"types":[]}];
implementors["sdp"] = [{"text":"impl RefUnwindSafe for ConnectionInformation","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Address","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bandwidth","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Attribute","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Direction","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ExtMap","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MediaDescription","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RangedPort","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MediaName","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Origin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TimeZone","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TimeDescription","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Timing","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RepeatTime","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SessionDescription","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Codec","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; RefUnwindSafe for Lexer&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; RefUnwindSafe for StateFn&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConnectionRole","synthetic":true,"types":[]}];
implementors["srtp"] = [{"text":"impl RefUnwindSafe for SessionKeys","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SrtpSsrcState","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SrtcpSsrcState","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Session","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Stream","synthetic":true,"types":[]}];
implementors["transport"] = [{"text":"impl RefUnwindSafe for ERR_BUFFER_FULL","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BUFFER_CLOSED","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_BUFFER_SHORT","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_PACKET_TOO_BIG","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ERR_TIMEOUT","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Buffer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SlidingWindowDetector","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WrappedSlidingWindowDetector","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NoOpReplayDetector","synthetic":true,"types":[]}];
implementors["util"] = [{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()