/**
 * 管理系统平台
 */
let validArticleContent = (rule,value,callback)=>{
    if (!value || value == '') {
        callback(new Error('请填写正文'));
    }
    else {
        value = value.replace(/(^\s*)|(\s*$)/g, "");
        if (value == '') {
            callback(new Error('请填写正文'));
        }
        else if(value.length < 3) {
            callback(new Error('正文不能少于三个字符'));
        }
        callback()
    }
};
const formStructConfig = {
    formSysUser: {
        id: '',
        name: '',
        nickname: '',
        oldPassword: '',
        password: '',
        passwordOrgi: '',
        typeId: '',
        isHeadhunting: '0',
        memberId: '',
        status: 1,
    },
    formUser: {
        id: '',
        name: '',
        nickname: '',
        oldPassword: '',
        password: '',
        passwordOrgi: '',
        typeId: '',
        isHeadhunting: '0',
        memberId: '',
        status: 1,
    },
    formUserType: {
        id: '',
        name: '',
        desc: '',
    },
    formUserDetail: {
        id: '',
        userId: '',
        desc: '',
        nation: '',
        province: '',
        city: '',
        address: '',
        telephone: '',
        fax: '',
        zip: '',
        msn: '',
        qq: '',
        email: '',
        wechat: '',
        alipay: '',
    },
    formMember: {
        id: '',
        memberTitle: '',
        memberDesc: '',
        minIntegral: '',
        maxIntegral: '',
        minAmount: '',
        maxAmount: '',
    },
    formAuthUserRole: {
        recordId: '',
        userId: '',
        userName: '',
        roleId: '',
        roleName: '',
    },
    formAuthRoleModule: {
        recordId: '',
        roleId: '',
        moduleId: '',
        roleName: '',
        moduleName: '',
        fullModuleName: '',
    },
    formAuthRole: {
        roleId: '',
        roleName: '',
        roleDesc: ''
    },
    formAuthModule: {
        moduleId: '',
        parentId: '',
        moduleName: '',
        moduleDesc: '',
        moduleUrl: '',
        isLeaf: '0',
        fullModuleName: '',
        moduleCode: '',
        order: 0,
        moduleIcon: '',
        moduleStyle: '',
        isMenu: 0,
        moduleLogo: '',
    },
    formAuthUserRoleModule: {
        userId: '',
        userName: '',
        userNickname: '',
        roleId: '',
        roleName: '',
        moduleId: '',
        parentModuleId: '',
        moduleName: '',
        fullModuleName: ''
    },
    formCategory: {
        recordId: '',
        typeId: '',
        typeName: '',
        name:'',
        desc:'',
        recordTime:'',
        flag:'',
    },
    formCategoryType: {
        recordId: '',
        name:'',
        desc:'',
        recordTime:'',
        flag:''
    },
    formDict: {
        dictId: '',
        dictType: '',
        dictName: '',
        dictRemark: '',
        recordTime: '',
        recordFlag: ''
    },
    formLangConf: {
        recordId: '',
        name: '',
        desc: '',
        recordTime: '',
        updateTime: '',
        updateUserId: '',
        recordFlag: ''
    },
    formNews: {
        recordId: '',
        title: '',
        content: '',
        tags: '',
        remark: '',
        typeId: '',
        isReceipt: '',
        startTime: '',
        endTime: '',
        receiverType: '',
        receiverId: '',
        recordFlag: '',
        typeName: '',
        receiveRoles: [],
        receiveUsers: [],
        receiveUserIds: [],
        sendSms: false,
        sendMail: false,
    },

    formArticle: {
        isEdit: false,
        recordId: '',
        categoryId: '',
        categoryName: '',
        title: '',
        intro: '',
        content: '',
        tags: '',
        source: '',
        authorName: '',
        sourceSite: '',
        creatorId: '',
        creatorName: '',
        updatorId: '',
        updatorName: '',
        updateTime: '',
        recordTime: '',
        commentsCount: 0,
        viewCount: 0,
        likeCount: 0,
        stinkyEgg: 0,
        sendType: '',
        receiverIds: [],
        receiveUsers: [],
        receiverIdArrStr: '',
        isBrief: true,
    },

    formPartyDues: {
        recordId: '',
        userId: '',
        payTime: '',
        payAmount: '0.00',
        remark: '',
        recordTime: '',
        recordFlag: '',
        payPeriod: '',
        userName: '',
        userNickname: '',
        userSex: '',
        userOrgName: '',
    },

    formRes: {
        recordId: '',
        resName: '',
        typeId: '',
        assId: '',
        assTypeId: '',
        originalName: '',
        currName: '',
        recordTime: '',
        recordFlag: '',
        resSize: '',
        announcerId: '',
        publishTime: '',
        resAuthor: '',
        resSrc: '',
        resIntro: '',
        resDesc: '',
        resTags: '',
        modifyTime: '',
        editorId: '',
        accessUrl: '',
        auditorId: '',
        auditTime: '',
        auditStatus: '',
        typeName: '',
        assTitle: '',
        assTypeName: '',
        announcerName: '',
        editorName: '',
        auditorName: '',
        orgId: '',
        orgName: '',
        attaContent: '',
        isShowFileOriginalName: false,  // 是否显示文件原始名称(仅当编辑时，且未选择新文件)
    },

    formResDl: {
        recordId: '',
        resId: '',
        userId: '',
        dlTime: '',
        recordFlag: '',
        resName: '',
        resOriginalName: '',
        userName: '',
        typeId: '',
        typeName: '',
        assId: '',
        assTypeId: '',
        assTitle: '',
        assTypeName: '',
    },

    formModifyPwd: {
        oldPassword: '',    //原始密码
        password: '',       //当前密码
        passwordOrgi: '',   //重复密码
    },

    formBriefSendRecord: {
        recordId: '',
        briefId: '',
        senderId: '',
        receiverId: '',
        status: '0',
        recordFlag: '1',
        sendTime: '',
        viewTime: '',
        key: '',
    },

    searchForm: {
        sysUser: {
            id: '',
            name: '',
            nickname: '',
            typeId: '',
            isHeadhunting: '0',
            memberId: '',
            status: '',
            key: '',
        },
        memberUser: {
            name: '',
            nickname: '',
            typeId: '',
            isHeadhunting: '0',
            memberId: '',
            status: '',
            key: '',
        },
        authUserRole: {
            recordId: '',
            userId: '',
            userName: '',
            roleId: '',
            roleName: '',
        },
        authRoleModule: {
            recordId: '',
            roleId: '',
            moduleId: '',
            roleName: '',
            moduleName: '',
            fullModuleName: '',
        },
        authRole: {
            roleId: '',
            roleName: '',
            roleDesc: ''
        },
        authModule: {
            moduleId: '',
            parentId: '',
            moduleName: '',
            moduleDesc: '',
            moduleUrl: '',
            isLeaf: '0',
            fullModuleName: '',
            moduleCode: '',
            order: 0,
            moduleIcon: '',
            moduleStyle: '',
            isMenu: null,
            moduleLogo: '',
        },
        authUserRoleModule: {
            userId: '',
            userName: '',
            userNickname: '',
            roleId: '',
            roleName: '',
            moduleId: '',
            parentModuleId: '',
            moduleName: '',
            fullModuleName: '',
        },
        category: {
            recordId: '',
            typeId: '',
            typeName: '',
            name:'',
            desc:'',
            recordTime:'',
            flag:'',
        },
        categoryType: {
            recordId: '',
            name:'',
            desc:'',
            recordTime:'',
            flag:''
        },
        dict: {
            dictId: '',
            dictType: '',
            dictName: '',
            dictRemark: '',
            recordTime: '',
            recordFlag: ''
        },
        langConf: {
            recordId: '',
            name: '',
            desc: '',
            recordTime: '',
            updateTime: '',
            updateUserId: '',
            recordFlag: ''
        },
        news: {
            recordId: '',
            title: '',
            content: '',
            tags: '',
            remark: '',
            typeId: '',
            isReceipt: '',
            startTime: '',
            endTime: '',
            receiverType: '',
            receiverId: '',
            recordFlag: '',
            typeName: '',
            isViewed: '',
            viewerId: '',
            allBtnType: 'info', // 全部按钮样式
            viewedBtnType: '', // 已读按钮样式
            unViewedBtnType: '', // 未读按钮样式
        },
        article: {
            recordId: '',
            categoryId: '',
            categoryName: '',
            title: '',
            intro: '',
            content: '',
            tags: '',
            source: '',
            authorName: '',
            sourceSite: '',
            creatorId: '',
            creatorName: '',
            updatorId: '',
            updatorName: '',
            updateTime: '',
            recordTime: '',
            commentsCount: 0,
            viewCount: 0,
            likeCount: 0,
            stinkyEgg: 0,
            sendType: '',
            isBrief: true,
            key: '',
        },
        partyDues: {
            recordId: '',
            userId: '',
            payTime: '',
            payAmount: '0.00',
            remark: '',
            recordTime: '',
            recordFlag: '',
            payPeriod: '',
            userName: '',
            userNickname: '',
            userSex: '',
            userOrgName: '',
            key: '',
        },
        res: {
            recordId: '',
            resName: '',
            typeId: '',
            assId: '',
            assTypeId: '',
            originalName: '',
            currName: '',
            recordTime: '',
            recordFlag: '',
            resSize: '',
            announcerId: '',
            resAuthor: '',
            resSrc: '',
            resIntro: '',
            resDesc: '',
            resTags: '',
            modifyTime: '',
            editorId: '',
            accessUrl: '',
            auditorId: '',
            auditTime: '',
            auditStatus: '',
            typeName: '',
            assTitle: '',
            assTypeName: '',
            announcerName: '',
            editorName: '',
            auditorName: '',
            key: '',
            publishTime: '',
            currTypeId: '',
            currTypeName: '',
            orgId: '',
            orgName: '',
            attaContent: '',
            yearMonth: '',
        },

        resDl: {
            recordId: '',
            resId: '',
            userId: '',
            dlTime: '',
            recordFlag: '',
            resName: '',
            resOriginalName: '',
            userName: '',
            typeId: '',
            typeName: '',
            assId: '',
            assTypeId: '',
            assTitle: '',
            assTypeName: '',
            key: '',
        },

        briefSendRecord: {
            recordId: '',
            briefId: '',
            senderId: '',
            receiverId: '',
            status: '0',
            recordFlag: '1',
            sendTime: '',
            viewTime: '',
            key: '',
        },
    },
    dialogShow: {
        authModule: false,
        role: false,
        roleAdd: false,
        memberUser: false,
        sysUser: false,
        roleModule: false,
        userRole: false,
        userRoleModule: false,
        category: false,
        categoryType: false,
        langConf: false,
        dwjbxx: false,
        ssdzzqk:false,
        leader:false,
        reward:false,
        dept:false,
        news: false,
        newsReceivers: false,
        viewNews: false,
        article: false,
        partyDues: false,
        nddyxxcj:false,
        res: false,
        resDl: false,
        nddyxxcjdetail:false,
        nddyxxcjYear:false,
        resUpload: false,
        modifyPwd: false,
        viewBrief: false,
        viewNotice: false,
        receiverIds: false,
        briefReceivers: false,
    },
    rules: {
        name: [
            { required: true, message: '请输入名称(标题或姓名)', trigger: 'blur' },
            { min: 2, max: 64, message: '长度在 2 到 64 个字符之间', trigger: 'blur' }
        ],
        username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 64, message: '长度在 2 到 64 个字符之间', trigger: 'blur' }
        ],
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 64, message: '长度在 2 到 64 个字符之间', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 128, message: '长度在 6 到 128 个字符之间', trigger: 'blur' }
        ],
        oldPassword: [
            { required: true, message: '请输入原密码', trigger: 'blur' },
            { min: 6, max: 128, message: '长度在 6 到 128 个字符之间', trigger: 'blur' }
        ],
        passwordOrgi: [
            { required: true, message: '请再次输入原密码', trigger: 'blur' },
            { min: 6, max: 128, message: '长度在 6 到 128 个字符之间', trigger: 'blur' }
        ],
        title: [
            { required: true, message: '请填写标题', trigger: 'blur' },
            { min: 3, max: 2000, message: '长度在 3 到 2000 个字符之间', trigger: 'blur' }
        ],
        content: [
            { required: true, message: '请填写内容', trigger: 'blur' },
            { min: 3, max: 2000, message: '长度在 3 到 2000 个字符之间', trigger: 'blur' }
        ],
       
        orgName: [
        	{ required: true, message: '请填写党组织名称' , trigger: 'blur'}
        ],
    	foundTime: [
        	{ required: true, message: '请选择批准建立党组织日期' , trigger: 'blur'}
        ],
        orgType:[
        	{ required: true, message: '请选择党组织类型' , trigger: 'blur'}
        ],
        orgAddressRelation:[
        	{ required: true, message: '请选择党组织属地关系' , trigger: 'blur'}
        ],
        elctType:[
        	{ required: true, message: '请选择选举方式' , trigger: 'blur'}
        ],
        currentLeaderTime:[
        	{ required: true, message: '请选择本届班子当选日期' , trigger: 'blur'}
        ],
        changeOrgRelationAuth:[
        	{ required: true, message: '请选择转接组织关系权限' , trigger: 'blur'}
        ],
        concatPersion:[
        	{ required: true, message: '请填写党组织联系人' , trigger: 'blur'}
        ],
        orgJobPhone:[
        	{ required: true, message: '请填写党组织办公电话' , trigger: 'blur'}
        ],
        payTime: [
            { required: true, message: '请选择上缴时间', trigger: 'blur'}
        ],
        payPeriod: [
            { required: true, message: '请输入上缴哪季度党费', trigger: 'blur' },
            { min: 3, max: 128, message: '长度在 3 到 128 个字符之间', trigger: 'blur' }
        ],
        payAmount: [
            { required: true, message: '请输入金额', trigger: 'blur' },
        ],
        receiverId: [
            { required: true, message: '请选择接收人', trigger: 'blur' },
        ],
        publishTime: [
            { required: true, message: '请选择发布时间', trigger: 'blur'}
        ],
        resName: [
            { required: true, message: '请填写名称', trigger: 'blur' },
            { min: 3, max: 512, message: '长度在 3 到 512 个字符之间', trigger: 'blur' }
        ],
        originalName: [
            { required: true, message: '请上传文件', trigger: 'blur' },
        ],
        roleName: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
            { min: 3, max: 64, message: '长度在 3 到 64 个字符之间', trigger: 'blur' }
        ],
        userName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        birthTime: [
            { required: true, message: '请选择出生日期', trigger: 'blur' },
        ],
        gender: [
            { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        joinPartyTime: [
            { required: true, message: '请选择入党时间', trigger: 'blur' },
        ],
        nation: [
            { required: true, message: '请选择民族', trigger: 'blur' },
        ],
        hometown: [
            { required: true, message: '请选择籍贯', trigger: 'blur' },
        ],
        education: [
            { required: true, message: '请填写学历', trigger: 'blur' },
        ],
        leader:[
            { required: true, message: '请选择是否为部门领导人', trigger: 'blur' },
        ],
        assTypeId: [
            { required: true, message: '请选择其他分类', trigger: 'blur' },
        ],
        articleContent: [
            { required: true, message: '请填写正文', trigger: 'blur' },
            { min: 3, message: '正文至少3个字符', trigger: 'blur' }
        ],
        receiverIdArrStr: [
            { required: true, message: '请选择接收人', trigger: 'blur' },
        ],
        positon: [
            { required: true, message: '请选择职务', trigger: 'blur' },
        ],
        allowLeaderTime: [
            { required: true, message: '请选择批准日期', trigger: 'blur' },
        ],
        rewardName: [
            { required: true, message: '请选择奖惩名称', trigger: 'blur' },
        ],
        allowOrg: [
            { required: true, message: '请填写批准组织', trigger: 'blur' },
        ],
        allowOrgLevel: [
            { required: true, message: '请填写批准组织级别', trigger: 'blur' },
        ],
        orgId: [
            { required: true, message: '请选择所在党组织', trigger: 'blur' },
        ],
        
        mail: [
            { required: true, message: '请填写邮箱', trigger: 'blur' },
        ],
        phone: [
            { required: true, message: '请填写手机号码', trigger: 'blur' },
        ],
        
    },
    dateDickerOptions: {

    },
    editableTabsOptions: {
        editableTabsValue: '2',
        editableTabs: [],
        tabIndex: 2,
        activeName: 'first',
    }
};

let StructMock = Mock.mock('/api/admin/main/struct', {
    'formStructConfig':formStructConfig,
});
