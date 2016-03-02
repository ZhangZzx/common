/**
 *		�򵥵�ģ������
 * @param string template ��Ҫ���滻���ַ���
 * @param object context ģ�����
 * @author jiangbai333
 * @email jiangbai333@Gmail.com
 * @time 2016-03-02 14:27:29
 */
function render(template, context) {
	/** ƥ��ģ�������������ʽ */
    var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
    
    return template.replace(reg, function(str, mark, match, index) {
	    /** �����\\{$.*}��Ϊռλ��, �򲻽����滻 */
        if ( mark ) {
            return str.replace('\\', '');
        } else {
			/** ��������ϵ�ָ�ģ����� */
            var variables = match.replace(/\s/g, '').split('.'),
			
                currentObject = context;
            
			/** ѭ������ģ����� */
			for ( var obj in variables ) {
                currentObject = currentObject[variables[obj]];
                if ( currentObject === undefined || currentObject === null ) {
                    return '';
                }
            }

            return currentObject;
        }
    });
}

/** ��ģ��������ص�String��ԭ���� */
String.prototype.render = function (context) {
    return render(this, context);
};


/**
 *		������
 */
 
String.prototype.templated = function (context) {
    return function(template, context) {
		/** ƥ��ģ�������������ʽ */
		var reg = /(\\)?\{\$([^\{\}\\]+)?\}/g;
		
		return template.replace(reg, function(str, mark, match, index) {
			/** �����\\{$.*}��Ϊռλ��, �򲻽����滻 */
			if ( mark ) {
				return str.replace('\\', '');
			} else {
				/** ��������ϵ�ָ�ģ����� */
				var variables = match.replace(/\s/g, '').split('.'),
				
					currentObject = context;
				
				/** ѭ������ģ����� */
				for ( var obj in variables ) {
					currentObject = currentObject[variables[obj]];
					if ( currentObject === undefined || currentObject === null ) {
						return '';
					}
				}

				return currentObject;
			}
		});
	}(this, context);
};
