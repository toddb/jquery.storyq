VERSION = 0.1

SRC_DIR = src
BUILD_DIR = build

JS_FILES = ${SRC_DIR}/storyq.js\
 ${SRC_DIR}/storyq.treeview.js\
 ${SRC_DIR}/storyq.xml.js\
 ${SRC_DIR}/storyqitem.js\
 ${SRC_DIR}/storyqresults.js

RELEASE_FILES = todo README changelog.txt GPL-license.txt MIT-license.txt
IMAGES = ${SRC_DIR}/images/*
CSS = ${SRC_DIR}/css/*
IMAGES_DIST = ${BUILD_DIR}/dist/images
CSS_DIST = ${BUILD_DIR}/dist/css

WE = ${BUILD_DIR}/dist/jquery.storyq.js
WE_PACK = ${BUILD_DIR}/dist/jquery.storyq.pack.js
WE_ARCH = ../jquery.storyq.tar.gz
WE_RELEASE = jquery.storyq-${VERSION}.tar.gz

MERGE = sed -e '1 s/^\xEF\xBB\xBF//' ${JS_FILES} > ${WE}
PACKER = perl -I${BUILD_DIR}/packer ${BUILD_DIR}/packer/jsPacker.pl -i ${WE} -o ${WE_PACK} -e62

all: archive

storyq:
	@@echo "Building" ${WE}

	@@echo " - Merging files"
	@@${MERGE}

	@@echo ${WE} "Built"
	@@echo

pack: storyq
	@@echo "Building" ${WE_PACK}

	@@echo " - Compressing using Packer"
	@@${PACKER}

	@@echo ${WE_PACK} "Built"
	@@echo

archive: pack
	@@echo "Building" ${WE_RELEASE}

	@@echo " - Cleaning CSS and images"
	@@rm -f ${IMAGES_DIST}/*
	@@rm -f ${CSS_DIST}/*
	@@echo " - Coping CSS and images"
	@@cp -R -f ${IMAGES} ${IMAGES_DIST}
	@@cp -R -f ${CSS} ${CSS_DIST}
	@@cp -f ${RELEASE_FILES} build/dist
	@@echo " - Creating release"
	@@tar -czf ${WE_RELEASE} build/dist

	@@echo "Building" ${WE_ARCH}

	@@echo " - Creating archive"
	@@rm -f ${WE_ARCH}
	@@tar --exclude '.DS_Store' -czf ${WE_ARCH} .



	
	

